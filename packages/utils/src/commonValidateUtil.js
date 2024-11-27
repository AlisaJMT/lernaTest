const CommonValidateUtil= {
  validIp:(rule, value, callback)=> {
    const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    if ((!reg.test(value)) && value != '') {
      return callback(new Error('请输入正确的IP地址'));
    } else {
      callback();
      return;
    }
  },
  validPort:(rule, value, callback)=> {
    const reg = /^[0-9]*$/;
    if ((!reg.test(value)) || value == 0 || value > 65535) {
      return callback(new Error('端口格式为1-65535的数字'));
    } else {
      callback();
      return;
    }
  }
}
export default CommonValidateUtil;
