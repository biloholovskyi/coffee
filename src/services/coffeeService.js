const url = 'http://localhost:3000'
export default class CoffeeService {
  async getResources(folder) {
    const res = await fetch(`${url}${folder}`)

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`)
    }
    return await res.json();
  }

  async getBestsellers() {
    return await this.getResources('/bestsellers');
  }

  async getGoods() {
    return await this.getResources('/goods');
  }

  async getAllCoffee() {
    return await this.getResources('/coffee');
  }

  async getOneCoffee(id) {
    return await this.getResources(`/coffee/${id}`);
  }
}