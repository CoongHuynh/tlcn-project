import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";

function padBase64(base64String) {
  return base64String + "=".repeat((4 - (base64String.length % 4)) % 4);
}

export function encryptAPIData(data, key) {
  if (typeof data === "object") {
    data = JSON.stringify(data);
  }

  const iv = CryptoJS.lib.WordArray.random(16); // Tạo IV 16 bytes
  const decodedKey = CryptoJS.enc.Base64.parse(padBase64(key)); // Chuyển khóa từ base64 thành bytes

  const encrypted = CryptoJS.AES.encrypt(data, decodedKey, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // Ghép encrypted data + IV
  const encryptedBase64 = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  const ivBase64 = CryptoJS.enc.Base64.stringify(iv);
  return `${encryptedBase64}::${ivBase64}`; // Dữ liệu mã hóa hoàn chỉnh
}

export function decryptAPIData(encryptedData, key) {
    const decodedKey = CryptoJS.enc.Base64.parse(padBase64(key));
  
    // Tách phần encrypted text và IV
    const parts = encryptedData.split("::");
    if (parts.length !== 2) {
      return { success: false, message: "Invalid data format" };
    }
  
    try {
      const encrypted = CryptoJS.enc.Base64.parse(padBase64(parts[0]));
      const iv = CryptoJS.enc.Base64.parse(padBase64(parts[1]));
  
      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: encrypted },
        decodedKey,
        { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
      );
  
      const decryptedData = decrypted.toString(CryptoJS.enc.Utf8);
      if (!decryptedData) throw new Error("Decryption failed");
  
      return { success: true, data: decryptedData };
    } catch (error) {
      return { success: false, message: "Decryption failed" };
    }
  }
  

const ENCRYPTION_API_DATA_KEY = "pVOPoPpUTKJ9EMOcNFrF+qJhGvS08xTx4PL9vhM99Ww=";
const DECRYPTION_API_DATA_KEY = "okeT9nsnhu4tYqJv54r8LrrldceczANuZZP91SDtgV0=";
// console.log("apikey", process.env.REACT_APP_API_KEY);
const data = "OMG291192 Trinh Cong Huynh";
const encryptedData = encryptAPIData(data, ENCRYPTION_API_DATA_KEY);
console.log("Encrypted Data:", encryptedData);

const data2 ="l5FjReoreuQ/Hko061WVGeN3BYqL+d8+eYY63fhYDv8=::eqGtXrROg5sP+CS1nOyQLw=="
const decryptData=decryptAPIData(data2,DECRYPTION_API_DATA_KEY);
console.log("decrypt data:",decryptData);

export const fetchApiSecurityTest = createAsyncThunk(
  "api/fetchApiSecurityTest",
  async (_, { rejectWithValue }) => {
    const data = "OMG291192 Trinh Cong Huynh";

    // Mã hóa dữ liệu
    const encryptedData = encryptAPIData(data, ENCRYPTION_API_DATA_KEY);
    console.log("Encrypted Data:", encryptedData);

    try {
      // Gửi dữ liệu mã hóa và IV dưới dạng JSON
      const response = await axios.post(`http://127.0.0.1:5555/ts_system_public_post_security_test`, encryptedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data);
      const responseData = response.data;

      const decryptedResponse = decryptAPIData(
        "ntNl3d8R5j+4m7NuYy0pPwOtlnFcXGLJWV3iwZGVTMkRYW8HMFyrThGRMii3eL+vOjoLzLEYppnwnKexB4qA8kdp",
        DECRYPTION_API_DATA_KEY
      );
      console.log("decrypt data", decryptedResponse);
      if (responseData.EncryptedResponse) {
        // Giải mã dữ liệu phản hồi
        const decryptedResponse = decryptAPIData(
          responseData.EncryptedResponse,
          DECRYPTION_API_DATA_KEY
        );
        console.log("Decrypted Response:", decryptedResponse);

        if (decryptedResponse.success) {
          return decryptedResponse.data;
        } else {
          return rejectWithValue(decryptedResponse.message);
        }
      } else {
        return rejectWithValue("EncryptedResponse not found in the response.");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const apiSlice = createSlice({
  name: "security",
  initialState: {
    securityTest: {
      data: null,
      loading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchApiSecurityTest.pending, (state) => {
        state.securityTest.loading = true;
        state.securityTest.error = null;
      })
      .addCase(fetchApiSecurityTest.fulfilled, (state, action) => {
        state.securityTest.loading = false;
        state.securityTest.data = action.payload;
      })
      .addCase(fetchApiSecurityTest.rejected, (state, action) => {
        state.securityTest.loading = false;
        state.securityTest.error = action.payload;
      });
  },
});

export default apiSlice.reducer;
