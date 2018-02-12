package com.highthon

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Build
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.*
import com.facebook.internal.Utility.buildUri
import kotlinx.android.synthetic.main.activity_main.*

@Suppress("DEPRECATION", "OverridingDeprecatedMember")
class MainActivity : AppCompatActivity() {

    private val website = "http://10.0.2.2:4200/result/"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        Log.d("dudco", intent.getStringExtra("token"))

        settings()
        load_website(intent.getStringExtra("token"))
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun settings(){
        val my_webSettings = webview.settings
        my_webSettings.javaScriptEnabled = true
        my_webSettings.loadsImagesAutomatically = true
        my_webSettings.cacheMode = WebSettings.LOAD_NO_CACHE
        my_webSettings.allowContentAccess = true
        my_webSettings.domStorageEnabled = true
        my_webSettings.useWideViewPort = true
        my_webSettings.javaScriptCanOpenWindowsAutomatically = true
        my_webSettings.setEnableSmoothTransition(true)
        my_webSettings.setRenderPriority(WebSettings.RenderPriority.HIGH)
    }

    private fun load_website(token:Any){
        if(Build.VERSION.SDK_INT >= 19){
            webview.setLayerType(View.LAYER_TYPE_HARDWARE, null)
        }else{
            webview.setLayerType(View.LAYER_TYPE_SOFTWARE, null)
        }
        webview.webChromeClient = object: WebChromeClient(){
            override fun onProgressChanged(view: WebView?, newProgress: Int) {


                super.onProgressChanged(view, newProgress)
            }
        }
        webview.webViewClient = object: WebViewClient(){
            override fun shouldOverrideUrlLoading(view: WebView?, URL: String?): Boolean {
                view?.loadUrl(URL)

                return true
            }
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    view?.loadUrl(request?.url.toString())
                }

                return true
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)

            }
        }

        webview.scrollBarStyle = View.SCROLLBARS_INSIDE_OVERLAY
        webview.loadUrl(website+token)
    }

    override fun onBackPressed() {
        if(webview.canGoBack()){
            webview.goBack()
        }else{
            super.onBackPressed()
        }
    }
}