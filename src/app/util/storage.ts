import {StepComponent} from "../page/base.step.component";

export class Storage<T> {

    private components: T[];

    constructor() {
        this.components = [];
    }

    addIfNotExist(componentRef: T) {
        if (this.contains(componentRef))
            return;
        this.add(componentRef);
    }

    addAll(components: T[]) {
        components.forEach(this.addIfNotExist);
    }

    get(type: string): T {
        return this.components.find(this.equals(type));
    }

    private equals(type: string) {
        return (comp: T) => Storage.toType(comp) === type;
    }

    private static toType(obj: any) {
        return obj.constructor.name;
    }

    private contains(componentRef: T): boolean {
        return this.components.some(this.equals(Storage.toType(componentRef)));
    }

    private add(componentRef: T) {
        this.components.push(componentRef);
    }
}

export const stepStorage: Storage<StepComponent> = new Storage();