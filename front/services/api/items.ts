import {
  ItemsApi
} from '@/gen';
import { config } from './config';

const api = new ItemsApi(config);

export const itemsService = {
  getItemsList: () => api.itemsControllerFindAll()
};
