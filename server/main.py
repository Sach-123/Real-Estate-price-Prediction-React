import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

cors=CORS(app,resources={r'*':{'origins':'*'}})


@app.route("/predict",methods=["POST","GET"]) # to get form data and apply ML model for prediction.
def predict():
    city = request.form.get("city")
    location = request.form.get("location")
    bhk = request.form.get("bhk")
    area  = float(request.form.get("squareFeet"))
    print(city, location, bhk, area) # print the form data on terminal
    
    if city=="Mumbai" :
        pipe_Mumbai = pickle.load(open("XGB_Mumbai.pkl","rb"))
        input = pd.DataFrame([[location,area,bhk]],columns=["location","area","bhk"])        
        prediction = pipe_Mumbai.predict(input)[0]
        return jsonify(
        {
        "prediction":float(prediction),
        "rate":float(prediction)/float(area)
        }
        )
    
    elif city=="Bangalore":
        pipe_Bangalore = pickle.load(open("XGB_Bangalore.pkl","rb"))
        input = pd.DataFrame([[location,area,bhk]],columns=["location","area","bhk"])
        prediction = pipe_Bangalore.predict(input)[0]
        return jsonify(
        {
        "prediction":float(prediction),
        "rate":float(prediction)/float(area)
        }
        )
    
    elif city=="Chennai":
        pipe_Delhi = pickle.load(open("XGB_Delhi.pkl","rb"))
        pipe_Chennai = pickle.load(open("XGB_Chennai.pkl","rb"))
        input = pd.DataFrame([[location,area,bhk]],columns=["location","area","bhk"])
        prediction = pipe_Chennai.predict(input)[0]
        
        return jsonify(
        {
        "prediction":float(prediction),
        "rate":float(prediction)/float(area)
        }
        )
    elif city=="Delhi":
        input = pd.DataFrame([[location,area,bhk]],columns=["location","area","bhk"])
        prediction = pipe_Delhi.predict(input)[0]
        return jsonify(
        {
        "prediction":float(prediction),
        "rate":float(prediction)/float(area)
        }   
        )

if __name__ == '__main__':
    app.run(debug=True)
