import EditProject from './edit-project';

export default interface Engine {
  initSDK(): boolean;
  unInitSDK(): void;
  createProject(): EditProject;
  destroyEditProject(project: EditProject): void;
  /**
   * 获取版本号
   *
   * @return 版本号
   */
  getVersionCode(): number;
  /**
   * 获取版本名称
   *
   * @return 版本名称
   */
  getVersionName(): string;
}
