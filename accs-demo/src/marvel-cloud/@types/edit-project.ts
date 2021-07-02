import Exporter from './exporter';
import { GlobalBaseMarvelAddonMeEditor, Ret } from './index';
import Editor from './editor';
import Viewer from './viewer';
import * as proto from 'src/protobuf/model';
export interface ViewerInfo {
  viewer: Viewer;
}

export default interface EditProject {
  sessionId: string | null | undefined;
  // marvel-node: path: Path
  load(path: string, keepalive: boolean, resoureceCallback: () => void): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult>;
  setViewer(viewer: Viewer, width: number, height: number);
  getViewer(): ViewerInfo;
  setMeEditor(editor: GlobalBaseMarvelAddonMeEditor);
  setEditor(editor: Editor);
  getEditor(): Editor;
  doExport(exporter: Exporter): Ret;
}
