import axios from 'axios';
import type { ApiError, ApiResponse, UserConfig, UserConfigRequest } from '../interface/UserConfig';


const API_URL = 'http://localhost:8025/api/configurations';

class ConfigService {
  /**
   * Salva a configuração do usuário
   */
async saveConfig(configData: UserConfig): Promise<ApiResponse<UserConfig>> {
    try {
        console.log('Dados recebidos:', configData);
        
        // Criando o objeto request corretamente inicializado
        const request: UserConfigRequest = {
            defaultLocation: `${configData.address} ${configData.country}`,
            language: configData.language || 'pt',
            useGps: false,
        };

        const response: AxiosResponse<ApiResponse<UserConfig>> = await axios.post(
            API_URL, 
            request,
            {
                headers: {
                    'Content-Type': 'application/json',
                    // Adicione outros headers necessários como Authorization
                },
            }
        );
        
        return response.data;
    } catch (error) {
        return this.handleError(error);
    }
}

  /**
   * Obtém a configuração do usuário
   */
  async getConfig(): Promise<ApiResponse<UserConfig>> {
    try {
      const response: AxiosResponse<ApiResponse<UserConfig>> = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  /**
   * Tratamento centralizado de erros
   */
  private handleError(error: unknown): Promise<never> {
    const axiosError = error as AxiosError<ApiError>;
    
    const apiError: ApiError = {
      message: axiosError.response?.data?.message || 'Erro na comunicação com o servidor',
      status: axiosError.response?.status,
      data: axiosError.response?.data,
    };

    console.error('API Error:', apiError);
    throw apiError;
  }
}

export const configService = new ConfigService();