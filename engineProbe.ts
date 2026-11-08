export const ENGINE_BRIDGE_CODE = "ESM_SH_TS_MODULE_OK_9999";

export function verifyRemoteTsCompiler(shotTitle: string): string {
  return `[ESM.SH 远端 TS 模块执行成功: ${ENGINE_BRIDGE_CODE} | 当前镜头: ${shotTitle}]`;
}
