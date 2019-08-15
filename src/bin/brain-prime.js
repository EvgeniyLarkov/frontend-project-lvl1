#!/usr/bin/env node

import { gameProcess } from '../core';
import { generateData, rule } from '../games/brain-prime';

gameProcess(generateData, rule);
