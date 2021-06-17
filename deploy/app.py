########################### Importing Packages ##################################


from flask import Flask,render_template,request

import os
from PIL import Image,ImageOps
import numpy as np
import keras
from keras import models

from random import randint
from werkzeug.utils import secure_filename

app = Flask(__name__)



UPLOAD_FOLDER = 'static/uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

model=models.load_model('model.h5')

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/form")
def form():
    return render_template('form.html')

@app.route("/predict",methods=['GET','POST'])
def predict():
    
    if request.method=='POST':


            f=request.files['file']
            file_path=os.path.join(app.config['UPLOAD_FOLDER'],secure_filename(f.filename))
            f.save(file_path)

            img=Image.open(file_path)
            img=ImageOps.grayscale(img)
            img=img.resize((64,64))
            img=np.asarray(img)
            img=img.reshape((64,64,1))
            test=[]
            test.append(img)
            test=np.array(test)
            test=test/255
            print(file_path)
            yhat=model.predict_classes(test)
            y=model.predict(test)
            print(yhat,y)
            if yhat[0][0] == 1:
                clas='COVID +ve'
            else:
                clas='COVID -ve'
            
            prediction=round(y[0][0]*100,2)
            pre=100-prediction
            
            return render_template('form.html',clas=clas,prediction=prediction,pre=pre,img_loc=file_path)
    print("No file found")
    return render_template('form.html')


if __name__=='__main__':
    app.run(debug=True)
