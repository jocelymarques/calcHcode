class CalcController {
    constructor() {
        this._locale = "pt-BR"
        this._displayCalcE1 = document.querySelector("#display");
        this._dateE1 = document.querySelector("#data");
        this._timeE1 = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);


    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("buttons > g, #parts > g");

        buttons.forEach((btn, index)=> {
            btn.addEventListener('click', e =>{
                console.log(btn.className.baseVal.replace("btn-",""));
            });
        

        })
    }

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime() {
        return this._timeE1.innerHTML;
    }

    set displayTime(value) {
        return this._timeE1.innerHTML = value;
    }

    get displayDate() {
        return this._dateE1.innerHTML;
    }

    set displayDate(value) {
        return this._dateE1.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcE1.innerHTML;
    }

    set displayCalc(value) {
        return this._displayCalcE1.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        return this._currentDate = value;
    }
}