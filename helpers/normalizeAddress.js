module.exports = (address) => {
  if (address) {
    return address
      .normalize("NFD")
      .replace(
        /([aeiouAEIOU])[\u0300\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030A\u030B\u030C\u030D\u030E\u030F]/gi,
        "$1$2"
      )
      .replace(/[\u4e00-\u9fff\u3400-\u4dff\uf900-\ufaff]/g, "")
      .normalize();
  } else {
    return "";
  }
};
