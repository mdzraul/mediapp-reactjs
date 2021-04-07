// ToastModule.java

package com.mediapp;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;


import java.io.IOException;
import java.util.Map;
import java.util.HashMap;

import static android.content.ContentValues.TAG;

public class EncryptModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  EncryptModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

 @Override
  public String getName() {
     return "ToastExample";
 }
 @ReactMethod
  public void EncryptAES(String message,String keyEncrypt, Callback errorCallback, Callback successCallback) {
       String params = null;
        try {
            params = AES.encode(message,keyEncrypt);
            successCallback.invoke(params);

        } catch (IOException e) {
            e.printStackTrace();
            Log.e(TAG, Log.getStackTraceString(e));
        }
  }

  @ReactMethod
  public void DecryptAES(String message,String keyEncrypt, Callback errorCallback, Callback successCallback) {
      System.out.println(message);
       String params = null;
        try {
            params = AES.decode(message,keyEncrypt);
            successCallback.invoke(params);

        } catch (IOException e) {
            e.printStackTrace();
            Log.e(TAG, Log.getStackTraceString(e));
        }
  }
 }
