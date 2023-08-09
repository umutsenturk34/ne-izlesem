export function generateApiEndpoint(url: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}/${url}`
}

export const phoneRegExp: RegExp =
  /^(((\+|00)?(90)|0)[-| ]?)?((5\d{2})[-| ]?(\d{3})[-| ]?(\d{2})[-| ]?(\d{2}))$/
;
  
export const optionsToString = (params: string[], data: { [key: string]: any }): { [key: string]: any } => {
  try {
    const result: { [key: string]: any } = {};

    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      console.log(param, data[param])
      if (data[param]?.length > 0) {
        result[param] = data[param].map((item: any) => item.value);
      } else {
        // Check if data[param] is undefined
        if (data[param] === undefined || data[param] === null) {
          result[param] = undefined;
        } else if (data[param].value === 'true' || data[param].value === 'false') {
          result[param] = Boolean(data[param].value);
        } else {
          result[param] = data[param].value;
        }
      }
    }

    return result;
  } catch (err) {
    console.error(err);
  }

  throw new Error('An error occurred during optionsToString execution.');
};


export function isValidDate(date: any) {
  return date instanceof Date && !isNaN(date.getTime());
}

  
  
  