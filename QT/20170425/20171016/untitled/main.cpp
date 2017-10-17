// KfbSDKDemoForCpp.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"

#include <string.h>
#include <Windows.h>
#include <iostream>
#include "DLLFunc.h"

using namespace std;

#define STEP 256

int _tmain(int argc, _TCHAR* argv[])
{
    char pTemp[256] = { NULL };
    ImageInfoStruct imageStruct;
    strcpy( pTemp, "2017-09-22 11_07_50.kfb" );
    if (!DLLFunc::InitImageFileFunc(imageStruct, pTemp))//初始化数据
    {
        return -1;
    }
    FILE *fp;
    KF_INT32	khiImageHeight = 0;
    KF_INT32	khiImageWidth = 0;
    KF_INT32	khiScanScale = 0;
    char	khiCompressType[8];
    float	khiSpendTime = 0;
    double	khiScanTime = 0;
    float	khiImageCapRes = 0;
    KF_INT32	khiImageBlockSize = 0;
    KF_INT32    nCurLevel = 0;
    KF_INT32    nTotalLevel = 0;
    /// \note 2017.03.28 hushiliang 获取头信息
    if (!DLLFunc::GetHeaderInfoFunc(imageStruct, khiImageHeight, khiImageWidth, khiScanScale, khiSpendTime, khiScanTime, khiImageCapRes, khiImageBlockSize))//获取头信息
    {
        return -1;
    }

    unsigned char* imageStream = NULL;
     KF_INT32 nDataLength = 0;
     for(int i=0;i*STEP<khiImageHeight;i++)
     {
         for(int j=0;j*STEP<khiImageWidth;j++)
         {
             DLLFunc::GetImageStreamFunc(imageStruct, khiScanScale, j*256, i*256, nDataLength, &imageStream);//获取块数据
             char buffsss[100];
             sprintf(buffsss,"%s%d%s%d%s","X",j,"Y",i,".jpg");
             fp = fopen( buffsss, "wb" );
             fwrite( imageStream, sizeof(unsigned char), nDataLength, fp);
             fclose( fp );
             cout<<"输出行"<<i<<"输出列"<<j<<endl;

         }
     }

           DLLFunc::DeleteImageDataFunc(imageStream);//释放数据流
           DLLFunc::UnInitImageFileFunc(imageStruct);//释放资源
    return 0;
}

