import { PointTypesUnion, PointTypesMerge, PointTypes, Points } from './type';

class PointCloud<
  T extends Partial<PointTypesUnion> = Partial<PointTypesMerge>,
> {
  public native: any;
  public readonly type: PointTypes;

  constructor(pointType = PointTypes.PointXYZ, native?: any) {
    const name = `PointCloud${pointType}`;
    this.native = native ?? new __PCLCore__[name]().makeShared();
    this.type = this.native.$$.ptrType.registeredClass.name.replace(
      'PointCloud',
      '',
    );
  }

  public isOrganized(): boolean {
    return this.native.isOrganized();
  }

  get isDense(): boolean {
    return this.native.is_dense;
  }

  get points(): Points<T> {
    return this.native.points;
  }

  set width(v: number) {
    this.native.width = v;
  }

  get width(): number {
    return this.native.width;
  }

  set height(v: number) {
    this.native.height = v;
  }

  get height(): number {
    return this.native.height;
  }

  public clear() {
    this.native.clear();
  }

  public delete() {
    this.native.delete();
  }
}

function createPointCloud<T>(native: any) {
  const pointType = native.$$.ptrType.registeredClass.name.replace(
    'PointCloud',
    '',
  );
  return new PointCloud<T>(pointType, native);
}

export { PointCloud, createPointCloud };
export * from './type';