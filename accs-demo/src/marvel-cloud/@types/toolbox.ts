import { FrameParam, ResourceInfo, Ret, VideoFrame } from '.';
import * as proto from '../protobuf/model';

export default interface Toolbox {
  /**
    * 从指定视频中进行截帧操作
    * @param param 配置参数, 其中为一组字串类型键值对，keys为:
    *    path:        视频的全路径
    *    imageWidth:  解出一帧的图片宽度
    *    imageHeight: 解出一帧的图片高度
    *    startTimeUs: 起始时间(us)
    *    stopTimeUs:  结束时间(us)
    *    fps:         帧率
    * @param onFrameCallback 视频帧截取回调
    *    callback函数的定义的参数为:
    *         data  截帧回调的ImageBuffer
    *         pts   截帧的时间戳
    *         index 截帧的顺序
    * @param onEndCallback
    *         截帧结束时的回调
    * @return 0表示成功执行，其它为出现错误。
    */
  generateVideoFrame: (params: FrameParam,
    onFrameCallback: (videoFrame: VideoFrame) => void,
    onEndCallback: () => void) => Ret;

  getResourceInfo: (path: string) => ResourceInfo;

  /**
   * 获取用户素材的资源列表
   *
   * @param page 当前页
   * @param pageSize size <= 1000
   * @returns
   * [
   *  {
   *    resourceUri: 'xx',
   *    fileSize: 11,
   *    lastModified: 111111111
   *  }
   * ]
   */
  getResourceListUserMaterial: (page: number, pageSize: number) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceListUserMaterialCommandResult.IUserMaterialInfo[]>;
}
