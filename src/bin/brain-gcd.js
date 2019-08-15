#!/usr/bin/env node

import { gameProcess } from '../core';
import { generateData, rule } from '../games/brain-gcd';

gameProcess(generateData, rule);
