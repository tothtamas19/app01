/*
* File: app01
* Author: Tóth Tamás
* Copyright: 2024, Tóth Tamás
* Group: Szoft V
* Date: 2024-05-30
* Github: https://github.com/tothtamas19/
* Licenc: GNU GPL
*/

class Elipszoid {
    aInput?: HTMLInputElement | null;
    bInput?: HTMLInputElement | null;
    cInput?: HTMLInputElement | null;
    areaInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.aInput = document.querySelector("#a");
        this.bInput = document.querySelector("#b");
        this.cInput = document.querySelector("#c");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const a = Number(this.aInput?.value);
        const b = Number(this.bInput?.value);
        const c = Number(this.bInput?.value);
        const area = this.calcArea(a, b, c);
        
    }

    calcArea(a: number, b: number, c: number): number {
        const rad = (4/3) * Math.PI* a*b*c;
        return rad
    }

}

new Elipszoid();
