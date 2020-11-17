package com.mediapp;


import org.bouncycastle.crypto.CipherParameters;
import org.bouncycastle.crypto.engines.AESEngine;
import org.bouncycastle.crypto.modes.CBCBlockCipher;
import org.bouncycastle.crypto.paddings.PaddedBufferedBlockCipher;
import org.bouncycastle.crypto.params.KeyParameter;
import org.bouncycastle.crypto.params.ParametersWithIV;
import org.bouncycastle.util.encoders.Base64;


import java.io.IOException;

/**
 * Encrypt/decrypt .bin files in AES format (Windows/Linux).
 * https://rtyley.github.io/spongycastle/
 * @author David Croft
 * @version $Revision: 186$
 */
public class AES {


	public enum Charset{
		UTF_8("UTF-8"),
		ISO_8859_1("ISO-8859-1");
		
		private String charset = "";
		
		private Charset(String charset){
			this.charset = charset;
		}
		
		public String getCharsetString(){
			return charset;
		}
	}

	private AES() {}
	
	public static String encode(String plain, String key) throws IOException {
		
		byte iv [] = new byte[key.length()];
		
		byte[] code = null;
		try {
			code = encrypt(plain.getBytes(), key.getBytes(), iv);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
		return new String(Base64.encode(code));
	}
	
	public static String decode(String input, String key) throws IOException {
		byte iv [] = new byte[key.length()];
		byte[] code = null;
		
		try {
			code = decrypt(Base64.decode(input.getBytes()), key.getBytes(), iv);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
		//return new String(code, Charset.ISO_8859_1.getCharsetString());
		return new String(code, Charset.UTF_8.getCharsetString());
	}
	
	private static byte[] cipherData(PaddedBufferedBlockCipher cipher, byte[] data)
	        throws Exception
	{
	    int minSize;
		minSize = cipher.getOutputSize(data.length);
		byte[] outBuf = new byte[minSize];
	    int length1 = cipher.processBytes(data, 0, data.length, outBuf, 0);
	    int length2 = cipher.doFinal(outBuf, length1);
	    int actualLength = length1 + length2;
	    byte[] result = new byte[actualLength];
	    System.arraycopy(outBuf, 0, result, 0, result.length);
	    return result;
	}

	private static byte[] decrypt(byte[] cipher, byte[] key, byte[] iv) throws Exception
	{
	    PaddedBufferedBlockCipher aes = new PaddedBufferedBlockCipher(new CBCBlockCipher(
	            new AESEngine()));
	    CipherParameters ivAndKey = new ParametersWithIV(new KeyParameter(key), iv);
	    aes.init(false, ivAndKey);
	    return cipherData(aes, cipher);
	}

	private static byte[] encrypt(byte[] plain, byte[] key, byte[] iv) throws Exception
	{
	    PaddedBufferedBlockCipher aes = new PaddedBufferedBlockCipher(new CBCBlockCipher(
	            new AESEngine()));
	    CipherParameters ivAndKey = new ParametersWithIV(new KeyParameter(key), iv);
	    aes.init(true, ivAndKey);
	    return cipherData(aes, plain);
	}

}