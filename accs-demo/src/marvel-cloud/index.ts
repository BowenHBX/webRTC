
// import { MarvelEditor } from './editor';
import EditProject from './@types/edit-project';
import Project from './addon/project';
// import {  MarvelExporter } from './exporter';
// import { MarvelViewer } from './viewer';
// import { MarvelToolbox } from './toolbox';

// import { CanvasScaleType, ExportType, FrameParam, MARVEL_API_VERSION, MARVEL_VERSION, Path, Ret } from './@types';
// import Editor from './@types/editor';
// import Exporter from './@types/exporter';
// import Viewer from './@types/viewer';
import Accs from './accs';
import * as proto from 'src/protobuf/model';
// export * from './@types'

class MarvelProject {
  private project: EditProject;
  // private exporter: MarvelExporter;
  // private viewer: MarvelViewer;
  // private editor: MarvelEditor;
  private _accs: Accs;
  private _userId: string;
  public sessionId: string | null | undefined;

  // static getVersion(): string {
  //   return MARVEL_VERSION;
  // }

  // static getApiVersion(): number {
  //   return MARVEL_API_VERSION;
  // }

  static async create(userId: string, appKey: string, appToken: string): Promise<MarvelProject> {
    const _instance = new MarvelProject();
    await _instance.init(userId, appKey, appToken);
    return _instance;
  }

  constructor() {
  }

  async init(userId: string, appKey: string, appToken: string) {
    this._userId = userId;
    // accs注册
    this._accs = new Accs();
    await this._accs.initAccs();
    this.project = new Project(this._accs, userId, appKey, appToken);
    // await this.project.getSessionId();
    // this.sessionId = this.project.sessionId;

    // const editor = new MarvelEditor();
    // const viewer = new MarvelViewer();
    // this.editor = editor;
    // this.viewer = viewer;
    // this.project.setMeEditor(editor.getMeProxy());
  }

  demo(): string {
    return 'test';
  }

  getUserId(): string {
    return this._userId;
  }

  getAccsCon(): string {
    return typeof this._accs.conn;
  }

  getSessionId() {
    return typeof this.sessionId;
  }

  // destroy() {
  //   this.engine.destroyEditProject(this.project);
  //   this.sdk = null;
  //   this.project = null;
  //   this.editor = null;
  //   this.viewer = null;
  //   this.exporter = null;
  // }

  // getSDK(): boolean {
  //   return this.sdk;
  // }

  async load(path: string, keepalive: boolean = true, callback): Promise<proto.com.taobao.multimedia.biz.cloudediting.interfaces.dto.proto.ISessionPrepareRTCommandResult> {
    return this.project.load(path, keepalive, callback);
  }

  // getEngine(): Engine {
  //   return this.engine;
  // }

  getProject(): EditProject {
    return this.project;
  }

  // getViewer(): MarvelViewer {
  //   return this.viewer;
  // }

  // setupViewer(width, height, canvaseWidth, canvasHeight): Viewer {
  //   this.project.setViewer(this.viewer.getProxy(), width, height) // 设置项目的viewer和viewer的尺寸
  //   this.editor.setCanvasSize(canvaseWidth, canvasHeight); //  MeEditor 新增设置Canvas画幅接口
  //   this.editor.setCanvasScaleType(CanvasScaleType.CenterCrop) // 画面居中裁剪
  //   return this.viewer;
  // }

  // getEditor(): MarvelEditor {
  //   return this.editor;
  // }

  // setExporter(exporter: MarvelExporter) {
  //   this.exporter = exporter;
  // }

  // doExporter(exporter?: MarvelExporter): Ret {
  //   if (exporter) {
  //     this.setExporter(exporter);
  //   }
  //   return this.getProject().doExport(this.exporter.getProxy());
  // }

  // createExporter(type: ExportType, path: Path): MarvelExporter {
  //   const exporter = new MarvelExporter(type);
  //   exporter.setOutputPath(path);
  //   return exporter;
  // }

}

export default MarvelProject;

// export {
//   MarvelProject
//   // Engine,
//   // Editor,
//   // MarvelEditor,
//   // EditProject as EditorProject,
//   // MarvelExporter,
//   // MarvelToolbox,
//   // Viewer, Exporter, ExportType,
//   // MarvelNodeAddonExporter,
//   // MarvelNodeAddonEngine,
//   // MarvelNodeAddonViewer,
//   // MarvelNodeAddonEditProject,
//   // MarvelNodeAddonMeEditor,
//   // FrameParam,
//   // MarvelNodeAddonToolbox
// };

