export class User {
    private email: string;
    private firstname: string;
    private name: string;
    private age: number;
    private weight: number;
    private height: number;
    // ===========================
    public getEmail(): string {
        return this.email; 
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    // ===========================
    public getFirstname(): string {
        return this.firstname; 
    }
    public setFirstname(firstname: string): void {
        this.firstname = firstname;
    }
    // ===========================
    public getName(): string {
        return this.name; 
    }
    public setName(name: string): void {
        this.name = name;
    }
    // ===========================
    public getAge(): number {
        return this.age; 
    }
    public setAge(age: number): void {
        this.age = age;
    }
    // ===========================
    public getWeight(): number {
        return this.weight; 
    }
    public setWeight(weight: number): void {
        this.weight = weight;
    }
    // ===========================
    public getHeight(): number {
        return this.height; 
    }
    public setHeight(height: number): void {
        this.height = height;
    }
}