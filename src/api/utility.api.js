export const apifetch = async (apifunc, api_param, log_result = false) => {
  const result = await apifunc(...api_param);

  if (log_result) {
    console.log(result);
    return result;
  } else {
    return result;
  }
};

var text = "this is text";
var replacedtext = text.replace(" ", "_").toLowerCase().trim();
