import Exporter from './exporter';
import { GlobalBaseMarvelAddonMeEditor, Ret } from './index';
import Editor from './editor';
import Viewer from './viewer';
import * as proto from '../protobuf/model';

export interface ViewerInfo {
  viewer: Viewer;
}

export default interface EditProject {
  sessionId: string | null | undefined;
  // marvel-node: path: Path
  getSessionId: (userId: string) => Promise<string>;
  load: (path: string, keepalive: boolean) => Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult>;
  sessionEndCurrent: () => Promise<boolean>;
  projectSave: (projectId: string, projectName: string) => Promise<boolean>;
  projectNew: () => Promise<boolean>;
  projectClose: () => Promise<boolean>;
  setViewer: (viewer: Viewer, width: number, height: number) => any;
  getViewer: () => ViewerInfo;
  setMeEditor: (editor: GlobalBaseMarvelAddonMeEditor) => any;
  setEditor: (editor: Editor) => any;
  getEditor: () => Editor;
  doExport: (exporter: Exporter) => Ret;
}
