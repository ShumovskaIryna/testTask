// #5 Реализовать класс 2-х мерный вектор.

class Vector {
    constructor(private _x: number, private _y: number) {  }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public set x(value: number) {
        this._x = value;
    }

    public set y(value: number) {
        this._y = value;
    }

    public addVector(vector: Vector) {
        const { x, y }: { x: number; y: number } = vector;

        this._x = this._x + x;
        this._y = this._y + y;
    }

    public multiply(vector: Vector) {
        const { x, y }: { x: number; y: number } = vector;

        this._x = this._x * x;
        this._y = this._y * y;
    }

    public minus(vector: Vector): void {
        const { x, y }: { x: number; y: number } = vector;

        this._x -= x;
        this._y -= y;
    }

    public showVector(): void {
        console.log(`X is equal to - ${this._x}, Y is equal to - ${this._y}`);
    }
}