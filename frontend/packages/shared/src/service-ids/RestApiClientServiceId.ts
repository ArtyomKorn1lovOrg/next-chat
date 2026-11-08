import type { ServiceIdentifier } from 'inversify';
import type { ApiClientInterface } from '@app/shared/interfaces';

const RestApiClientServiceId: ServiceIdentifier<ApiClientInterface> = Symbol.for('RestApiClientServiceId');
export default RestApiClientServiceId;
