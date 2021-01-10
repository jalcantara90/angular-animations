export let userIndex = 0;

export class User {
  constructor(
    public id: number = userIndex++,
    public name: string = 'Jonathan Alcántara',
    public title: string = 'Software engineer'
  ) {}
}
