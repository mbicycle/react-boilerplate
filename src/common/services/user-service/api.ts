import graph from 'common/interceptors/ms-graph-interceptor';

export const getUserPhoto = async (): Promise<Blob> => new Promise<Blob>(
  (resolve, reject) => {
    graph.graphClient.api('/me/photo/$value').get()
      .then((response: Blob) => resolve(response))
      .catch((error) => reject(error));
  },
);
export const delUserPhoto = async (): Promise<Blob> => new Promise<Blob>(
  (resolve) => {
    graph.graphClient.api('/me/photo').delete()
      .then((response: Blob) => resolve(response));
  },
);
