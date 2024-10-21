import { CreateReceiptDto } from './receipt.dto';

describe('ReceiptDto', () => {
  it('should be defined', () => {
    expect(new CreateReceiptDto()).toBeDefined();
  });
});
