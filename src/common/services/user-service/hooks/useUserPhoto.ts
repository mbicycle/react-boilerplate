import { useGetUserPhoto } from '../query-hooks';

export const useUserPhoto = (): { photo: string; } => {
  const { data } = useGetUserPhoto();

  const binaryData = [];
  binaryData.push(data);
  const photo = URL.createObjectURL(new Blob(binaryData as Blob[]));

  return {
    photo,
  };
};
