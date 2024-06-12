
//it take s'theFunction' as a parameter and try to resolve it, if not done then it catches the error and go to next
export const catchAsyncErrors = (theFunction) => {
    return (req, res, next) => {
      Promise.resolve(theFunction(req, res, next)).catch(next);
    };
  };