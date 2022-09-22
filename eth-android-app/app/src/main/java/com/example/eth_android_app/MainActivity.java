package com.example.eth_android_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;
import android.content.Intent;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;
    private Button mButton;
    public Context mcontext;

    // 자바스크립트에서 연결해 사용할 네이티브 함수 정의 인터페이스
    public interface CustomJSCallback {
        void webToApp();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mWebView = findViewById(R.id.webView);
        mButton = findViewById(R.id.button);

        mWebView.loadUrl("10.221.151.210:3000");
        mWebView.setWebChromeClient(new WebChromeClient());

        // webview method
        webViewInit(mWebView);
        mcontext = this.getApplicationContext();

        // 네이티브에서 js 함수 호출
        mButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v) {
                mWebView.loadUrl(("javascript:App()"));
            }
        });

        // js 네이티브 함수 호출
        mWebView.addJavascriptInterface(new CustomJSCallback() {
            @JavascriptInterface
            @Override
            public void webToApp() {
                Intent intent = new Intent(mcontext.getApplicationContext(), SubActivity.class);
                startActivity(intent);
            }
        }, "webToApp");
    }

    public void webViewInit(WebView mWebView) {
        WebSettings settings = mWebView.getSettings();

        // JS Using
        settings.setJavaScriptEnabled(true);

        // text encoding
        settings.setDefaultTextEncodingName("UTF-8");
    }
}