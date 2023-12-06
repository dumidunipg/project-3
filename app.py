# Import the dependencies.
from flask import Flask, jsonify

# Create an app, being sure to pass __name__
app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(debug=True)