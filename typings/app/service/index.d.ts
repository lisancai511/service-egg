// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCar = require('../../../app/service/car');
import ExportEntryPoint = require('../../../app/service/entryPoint');
import ExportInit = require('../../../app/service/init');
import ExportRole = require('../../../app/service/role');
import ExportSchool = require('../../../app/service/school');
import ExportStudent = require('../../../app/service/student');
import ExportStudentSource = require('../../../app/service/studentSource');
import ExportTimeInterval = require('../../../app/service/timeInterval');
import ExportTrainingGround = require('../../../app/service/trainingGround');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    car: AutoInstanceType<typeof ExportCar>;
    entryPoint: AutoInstanceType<typeof ExportEntryPoint>;
    init: AutoInstanceType<typeof ExportInit>;
    role: AutoInstanceType<typeof ExportRole>;
    school: AutoInstanceType<typeof ExportSchool>;
    student: AutoInstanceType<typeof ExportStudent>;
    studentSource: AutoInstanceType<typeof ExportStudentSource>;
    timeInterval: AutoInstanceType<typeof ExportTimeInterval>;
    trainingGround: AutoInstanceType<typeof ExportTrainingGround>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
