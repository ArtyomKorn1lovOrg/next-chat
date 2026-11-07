import { DependencyContainer } from '@app/shared/dependency-injection';
import { RestApiClientServiceId } from '@app/shared/service-ids';
import { RestApiClient } from '@app/shared/services';

DependencyContainer.bind(RestApiClientServiceId)
  .toDynamicValue(() => new RestApiClient('/'))
  .inSingletonScope();
