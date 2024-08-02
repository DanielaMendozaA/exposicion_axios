import axios, { AxiosResponse } from 'axios';
import { injectable, inject } from 'tsyringe';
import { container } from 'tsyringe';

const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com/users";
container.registerInstance("BASE_URL", jsonPlaceholderUrl);

@injectable()
class UserService {
    constructor(@inject("BASE_URL") private baseUrl: string) {}


  async getUsers(): Promise<AxiosResponse> {
    try{
        const response: AxiosResponse  = await axios.get(this.baseUrl);

        
        return response.data;
        
    }catch(error: any){
      throw new Error ("Hubo un error" + error);
    }
  }
};




export default UserService;