# Import the dependencies.
from flask import Flask, jsonify
from flask_pymongo import PyMongo

# Create an app, being sure to pass __name__
app = Flask(__name__, static_url_path='/static')
app.config["MONGO_URI"] = "mongodb://localhost:27017/pollution"
mongo = PyMongo(app)
#
@app.route("/")
def home():
    return (
        f"Welcome to the Home Page<br>"
        f"<br>____________________________<br>"
        f"<br>Available Routes:<br>"
        f"<br>"
        f"/Route 1: Co2 sea surface temp relationship Hansle/Shruti"
        f"/Route 2: Air Quality-Didi/Grant"
        f"/Bonus: Christmas route-Hansle"

    )

@app.route('/api/data/seatemp', methods=['GET'])
def get_data_seatemp():
    data = list(mongo.db.sea_temp.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data/co2', methods=['GET'])
def get_data_co2():
    data = list(mongo.db.co2_emission.find({}, {'_id': 0}))
    return jsonify(data)

@app.route('/api/data/aqi', methods=['GET'])
def get_data_aqi():
    data = list(mongo.db.aqi.find({}, {'_id': 0}))
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)