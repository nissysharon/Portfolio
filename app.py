from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/submit_feedback', methods=['POST'])
def feedback():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    with open("feedback.txt", "a") as file:
        file.write(f"Name: {name}\nEmail: {email}\nMessage: {message}\n\n")

    return "Thank you for your feedback!"

if __name__ == "__main__":
    app.run(debug=True)
