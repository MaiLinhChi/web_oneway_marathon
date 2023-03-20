import ApiService from '@/services/api';

// TYPES

export type TUpdatePromotionParams = unknown;
export type TUpdatePromotionBody = any;

export type TUpdatePromotionMaterials = {
  params?: TUpdatePromotionParams;
  body?: TUpdatePromotionBody;
};

export type TUpdatePromotionResponse = unknown;

// FUNCTION

export const updatePromotion = async ({
  params,
  body,
}: TUpdatePromotionMaterials): Promise<TUpdatePromotionResponse> => {
  const response = await ApiService.post(`/api/orders/apply-promotion-code`, body, { params });
  return response.data;
};
