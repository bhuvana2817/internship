function signup(event){
    event.preventDefault();
    window.location.href="welcome.html";
    console.log("job done")
}

function welcome(e){
    e.preventDefault();
    window.location.href = "home.html";
}

function home(e){
    e.preventDefault();
    window.location.href="main.html"
}


// web components start

class myCard extends HTMLElement {
    constructor() {
        super();
        this.imglink = "";
        this.text = "";
    }
    static get observedAttributes() {
        return ["imglink", "text"];
    }
    attributeChangedCallback(name, oldvalue, newvalue) {
        if (name === "imglink") {
            this.imglink = newvalue;
        }
        else if (name === "text") {
            this.text = newvalue;
        }
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "closed" })
        shadow.innerHTML = `
        <style>
        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 200px;
            margin: 0 auto;
        }

        .image {
            margin-right: 20px;
        }

        .image img {
            width: 200px;
            height: 100px;
        }

        .heading {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100%;
        }

        .heading h3 {
            margin: 0;
            line-height: 1.5;
        }


        .check {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ff69b4;
            border-radius: 50%;
            padding: 6px;
        }



        /* Responsive Styles */
        @media (max-width: 768px) {
            .card {
                padding: 15px;
            }

            .image img {
                width: 60px;
                height: 60px;
            }

            .heading h3 {
                font-size: 16px;
            }

            .heading p {
                font-size: 12px;
            }

            .check {
                padding: 4px;
            }


        }

        @media (max-width: 480px) {
            .card {
                flex-direction: column;
                text-align: center;
            }

            .image {
                margin-right: 0;
                margin-bottom: 10px;
            }

            .image img {
                width: 50px;
                height: 50px;
            }

            .heading h3 {
                font-size: 14px;
            }

            .heading p {
                font-size: 10px;
            }

            .check {
                padding: 2px;
            }


        }
    </style>
    <div class="card">
        <div class="image">
            <img src="${this.imglink}" alt="Design Inspiration">
        </div>
        <div class="heading">
            <h3>${this.text}</h3>
            <round-check></round-check>
        </div>
    </div>`;
    }
}
customElements.define('my-card', myCard)

class roundCheck extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #d94887;
  border-color: #d94887;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1;
}
/* general styling */
html, body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f1f2f3;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.container {
  margin: 0 auto;
  
}</style>
<div class="container">
  <div class="round"  >
    <input type="checkbox" onclick="check(event)" id="checkbox" />
    <label for="checkbox"></label>
  </div>
</div>
        `

    }
}

customElements.define("round-check", roundCheck);

var c = false;

function check(event) {
    var temp = true;
    if (event.target.checked) {
        c = c + 1;
        temp = true;
    } else {
        c = c - 1;
        temp = false;
    }
    console.log(c);

    if (c === 1 && temp === true) {
        var ele = `<h5>Or press return</h5>`;
        document.getElementById("return").insertAdjacentHTML('beforeend', ele);
    } else if (c === 0) {
        document.getElementById("return").innerHTML = "";
    }
}



// web components end

// input file web component

class inputFile extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
    <style>
      label.label input[type="file"] {
        position: absolute;
        top: -1000px;
      }
      .label {
        font-weight:700;
        color:black;
        cursor: pointer;
        border: 1px solid #cccccc;
        border-radius: 5px;
        padding: 5px 15px;
        margin: 15px;
        background: #fff;
        display: inline-block;
      }
      
      .label:active {
        background: #9fa1a0;
      }
      .label:invalid + span {
        color: #000000;
      }
      .label:valid + span {
        color: #ffffff;
      }
    </style>
    <form action="/form/sumbit" method="get">
      <label class="label">
        <input type="file" required/>
        <span>Choose Image</span>
      </label>
    </form>`
    }
}

customElements.define("input-file",inputFile);