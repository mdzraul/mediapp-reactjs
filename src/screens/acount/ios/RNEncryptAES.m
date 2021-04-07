//
//  RNEncryptAES.m
//  mediapp
//
//  Created by Raul Mendez on 07/11/20.
//

#import "RNEncryptAES.h"
#import <React/RCTLog.h>
@implementation RNEncryptAES

// Para exportar un módulo llamado CalendarManager
RCT_EXPORT_MODULE () ;

RCT_EXPORT_METHOD(encryptAES:(NSString *)param key:(NSString *)key callback:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    NSString *encryptParams =[FBEncryptorAES encryptBase64String:param keyString:key separateLines:NO];
    callback(@[encryptParams]);
  });
}
RCT_EXPORT_METHOD(decryptAES:(NSString *)param key:(NSString *)key callback:(RCTResponseSenderBlock)callback)
{
  dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
  NSString *decryptParams =[FBEncryptorAES decryptBase64String:param keyString:key];
    callback(@[decryptParams]);
  });
}


@end
