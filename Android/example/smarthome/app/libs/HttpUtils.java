import android.util.Log;

import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.PersistentCookieStore;
import com.loopj.android.http.RequestHandle;
import com.loopj.android.http.RequestParams;
import com.loopj.android.http.ResponseHandlerInterface;

import org.apache.http.cookie.Cookie;

import java.util.List;

@SuppressWarnings("deprecation")
public class HttpUtils {
    private final static String TAG = "HttpUtils";
    private static AsyncHttpClient mClient = new AsyncHttpClient();
    private static PersistentCookieStore mCookieStore;
    private static URLFilter mURLFilter;

    public static PersistentCookieStore getCookieStore() {
        return mCookieStore;
    }

    public static String getCookieValue(String key) {
        List<Cookie> cookies = mCookieStore.getCookies();
        for (Cookie cookie: cookies) {
            if (cookie.getName().equals(key)) {
                return cookie.getValue();
            }
        }
        return "";
    }

    public static void setCookieStore(PersistentCookieStore store) {
        mCookieStore = store;
        mClient.setCookieStore(mCookieStore);
    }

    public static void setURLFilter(URLFilter filter) {
        mURLFilter = filter;
    }

    public static AsyncHttpClient getAsyncHttpClient() {
        return mClient;
    }

    public static RequestHandle get(String URL, ResponseHandlerInterface responseHandler) {
        if (URL != null) {
            if (mURLFilter != null) {
                URL = mURLFilter.filter(URL);
            }
            Log.d(TAG, "get: " + URL);
            return mClient.get(URL, responseHandler);
        }
        return null;
    }

    public static RequestHandle get(String URL, RequestParams params, ResponseHandlerInterface responseHandler) {
        if (URL != null) {
            if (mURLFilter != null) {
                URL = mURLFilter.filter(URL);
            }
            Log.d(TAG, "get: " + URL);
            return mClient.get(URL, params, responseHandler);
        }
        return null;
    }

    public static RequestHandle post(String URL, ResponseHandlerInterface responseHandler) {
        return HttpUtils.post(URL, new RequestParams(), responseHandler);
    }

    public static RequestHandle post(String URL, RequestParams params,
                                     ResponseHandlerInterface responseHandler) {
        if (URL != null) {
            if (mURLFilter != null) {
                URL = mURLFilter.filter(URL);
            }
            Log.d(TAG, "post: " + URL);
            return mClient.post(URL, params, responseHandler);
        }
        return null;
    }

    public interface URLFilter {
        public String filter(String url);
    }

}
