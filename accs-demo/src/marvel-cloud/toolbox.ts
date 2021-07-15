import { FrameParam, ResourceInfo, Ret, VideoFrame } from './@types';
import Toolbox from './@types/toolbox';
import Accs from './accs';
import MarvelAddonToolbox from './addon/marvelAddonToolbox';
import { com } from './protobuf/model';

export class MarvelToolbox implements Toolbox {
  private proxyToolbox: Toolbox;

  constructor(accs: Accs, userId: string, sessionId: string | null | undefined) {
    this.proxyToolbox = new MarvelAddonToolbox(accs, userId, sessionId);
  }

  getResourceListUserMaterial(page: number, pageSize: number): Promise<com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ResourceListUserMaterialCommandResult.IUserMaterialInfo[]> {
    return this.proxyToolbox.getResourceListUserMaterial(page, pageSize);
  }

  generateVideoFrame(params: FrameParam,
    onFrameCallback: (videoFrame: VideoFrame) => void,
    onEndCallback: () => void): Ret {
    const ret = this.proxyToolbox.generateVideoFrame(params, onFrameCallback, onEndCallback);

    if (ret < 0) {
      console.warn(`Failed to generate video frames! Error code:${ret}`);
    }
    return ret;
  }

  getResourceInfo(path: string): ResourceInfo {
    return this.proxyToolbox.getResourceInfo(path);
  }
}
