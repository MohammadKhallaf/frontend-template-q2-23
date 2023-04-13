interface EndpointRequest<Params, Body> {
  params: Params;
  body: Body;
}

interface EndpointResponse<DataResponseType, ErrorResponseType> {
  success: boolean;
  data?: DataResponseType;
  error?: ErrorResponseType;
}
