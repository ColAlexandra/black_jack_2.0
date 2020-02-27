from flask import Flask, render_template, request


app = Flask (__name__)


@app.route('/')
def index():
    rate = int(request.args.get('rate', 40))
    balance = int(request.args.get('count-balance', 500))
    return render_template('index.html', rate=rate, balance=balance)


if __name__ == '__main__':
    app.run()