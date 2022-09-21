package com.example.eth_android_app;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private WebView mWebView;
    private Button mButton;
    public Context mcontext;

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

        mButton.setOnClickListener(new View.OnClickListener(){
            public void onClick(View v) {
                mWebView.loadUrl(("javascript:App()"));
            }
        });
    }

    public void webViewInit(WebView mWebView) {
        WebSettings settings = mWebView.getSettings();

        // JS Using
        settings.setJavaScriptEnabled(true);

        // text encoding
        settings.setDefaultTextEncodingName("UTF-8");
    }
}