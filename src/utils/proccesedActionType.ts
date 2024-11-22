import { CreateTransactionReqDto } from '../transaction/dto/createTransactionReq.dto';
import generatePassword from './generatePassword';

export default function proccesedActionType(createTransactionReqDto: CreateTransactionReqDto) {
  if (createTransactionReqDto.actionType === 'reg') {
    const password = generatePassword();
    createTransactionReqDto.password = password;
  }
}
