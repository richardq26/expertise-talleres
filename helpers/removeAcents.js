module.exports = (str) => {
    return encodeURIComponent(
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    );
  };
  