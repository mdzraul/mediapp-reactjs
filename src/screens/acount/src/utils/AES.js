import {Platform,NativeModules} from 'react-native'
import Environment from '../utils/Environment'

const AES = {
    encrypt: function(text){
        return new Promise((resolve, reject) => {
            if (Platform.OS === 'ios') {
                NativeModules.RNEncryptAES.encryptAES(text,Environment.KEY_SECRET, (encryptNative) => {
                  //console.log('AES Encrypt',encryptNative);
                  resolve(encryptNative)
                });
              }else{
               NativeModules.ToastExample.EncryptAES(text,Environment.KEY_SECRET,
               (err)=>{console.log(err)},
               encryptNative=>{
                //console.log('AES Encrypt',encryptNative);
                 resolve(encryptNative)
               })
              }
          })
    },
    decrypt: function(data){
        if (Platform.OS === 'ios') {
            NativeModules.RNEncryptAES.decryptAES(data,Environment.KEY_SECRET,(responseNative) => {
              //console.log('AES Decrypt',responseNative);
              response=responseNative
            });
        }else{
          NativeModules.ToastExample.DecryptAES(data,Environment.KEY_SECRET,
          (err)=>{console.log(err)},
          decryptNative=>{
           //console.log('AES Decrypt',decryptNative);
           response=responseNative
          })
        }
        return response
    }
}

export default AES;






  