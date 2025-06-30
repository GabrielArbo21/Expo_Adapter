// 1. EL OBJETIVO (Lo que el sistema espera): Interfaz para Cuchillos
interface Cuchillo {
    getLargoHojaCm(): number;
    cortar(): void;
}
// Implementación de un Cuchillo de Cocina normal (compatible)
class CuchilloDeCocina implements Cuchillo {
    private largo: number;

    constructor(largo: number) {
        this.largo = largo;
    }
    getLargoHojaCm(): number {
        return this.largo;
    }
    cortar(): void {
        console.log(`Cuchillo de cocina de ${this.largo} cm cortando ingredientes.`);
    }
}
// 2. EL ADAPTADO (La clase incompatible): Machete de Campo
class MacheteDeCampo {
    private largoTotalCm: number;
    constructor(largoTotalCm: number) {
        this.largoTotalCm = largoTotalCm;
    }
    getLargoTotalCm(): number {
        return this.largoTotalCm;
    }
    tajar(): void {
        console.log(`Machete de campo de ${this.largoTotalCm} cm tajando ramas.`);
    }
}
// 3. EL ADAPTADOR: Machete a Cuchillo
class AdaptadorMacheteACuchillo implements Cuchillo {
    private machete: MacheteDeCampo;
    constructor(machete: MacheteDeCampo) {
        this.machete = machete;
    }
    getLargoHojaCm(): number {
        return this.machete.getLargoTotalCm() * 0.6; // Por ejemplo, el 60% del largo total
    }
    cortar(): void {
        this.machete.tajar(); // El machete "corta" realizando su acción de "tajar"
    }
}
